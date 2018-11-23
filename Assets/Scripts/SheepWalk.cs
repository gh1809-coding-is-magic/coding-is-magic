﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
public class SheepWalk : MonoBehaviour
{
    static Animator anim;
    public float speed = 7f;
    public float rotationSpeed = 75.0f;
    public float duration = 1f;
    float elapsedTime = Mathf.Infinity;
    public Quaternion TargetRotation;
    public ParticleSystem ps;
    public bool move = true;
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    void Update()
    {
        float translation = Input.GetAxis("Vertical") * speed;
        float rotation = Input.GetAxis("Horizontal") * rotationSpeed;

        translation *= Time.deltaTime;
        rotation *= Time.deltaTime;

        if (move) {
        transform.Translate(0, 0, translation);
        transform.Rotate(0, rotation, 0);
        }

        if (translation != 0 || rotation != 0)
        {
            anim.SetBool("isWalking", true);
        }
        else
        {
            anim.SetBool("isWalking", false);
        }

        // to make sure the functionality is working: space to turn; q to move forward
        if (Input.GetKeyDown(KeyCode.Space)) {
            TurnNinety();
        }
        if (Input.GetKeyDown(KeyCode.Q)) {
            StartCoroutine(SheepMoveForward());
        }
    }

    void BlockyMove() {
        StartCoroutine(SheepMoveForward());
    }
    IEnumerator SheepMoveForward()
    {
        float elapsedTime = 0f;
        while (elapsedTime < duration)
        {
            transform.Translate(Vector3.forward * Time.deltaTime * 6f);
            elapsedTime += Time.deltaTime;
            anim.SetBool("isWalking", true);
            yield return null;
        }
    }
    void TurnNinety() {
        transform.Rotate(0, 90, 0);
        anim.SetBool("isWalking", true);
    }
       void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.name == "Plane")
        {
            SceneManager.LoadScene("Level_1");
        }
        if (other.gameObject.name == "Win")
        {
            move = false;
            anim.SetBool("isWin", true);
            ps.Play();
        }
    }
}
