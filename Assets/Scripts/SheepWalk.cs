using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SheepWalk : MonoBehaviour
{
    static Animator anim;
    public float speed = 10f;
    public float rotationSpeed = 75.0f;
    public float duration = 1f;
    float elapsedTime = Mathf.Infinity;

    Vector3 forward = new Vector3(0f, 0f, -10f);
    // Vector3 backwards = new Vector3(-10f, 0f, 10f);
    // Vector3 right = new Vector3(0f, 0f, 10f);
    // Vector3 left = new Vector3(10f, 0f, 10f);
    private Vector3 moveDirection = Vector3.zero;

    // Use this for initialization
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        float translation = Input.GetAxis("Vertical") * speed;
        float rotation = Input.GetAxis("Horizontal") * rotationSpeed;

        translation *= Time.deltaTime;
        rotation *= Time.deltaTime;

        transform.Translate(0, 0, translation);
        transform.Rotate(0, rotation, 0);

        if (translation != 0 || rotation != 0)
        {
            anim.SetBool("isWalking", true);

        }
        else
        {
            anim.SetBool("isWalking", false);
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
            transform.Translate(Vector3.forward * Time.deltaTime);
            elapsedTime += Time.deltaTime;
            anim.SetBool("isWalking", true);
            yield return null;
        }

    }
}
