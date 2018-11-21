using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SheepWalk : MonoBehaviour
{
    static Animator anim;
    public float speed = 50f;
    public float rotationSpeed = 75.0f;
    public float duration = 1f;
    float elapsedTime = Mathf.Infinity;
    public Quaternion TargetRotation;
    Rigidbody rBody;

    Vector3 forward = new Vector3(0f, 0f, -10f);
    // Vector3 backwards = new Vector3(-10f, 0f, 10f);
    Vector3 right = new Vector3(0f, 0f, 10f);
    // Vector3 left = new Vector3(10f, 0f, 10f);
    // private Vector3 moveDirection = Vector3.zero;
    public bool enter = true;
    private CharacterController _controller;
    // Use this for initialization
    void Start()
    {
        anim = GetComponent<Animator>();
        _controller = GetComponent<CharacterController>();
        // if (GetComponent<Rigidbody>()) {
        //     rBody = GetComponent<Rigidbody>();
        // }
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
        if (Input.GetKeyDown(KeyCode.Space)) {
            TurnNinety();
        }
        if (Input.GetKeyDown(KeyCode.Q)) {
            StartCoroutine(SheepMoveForward());
        }
    // Vector3 move = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
    // _controller.Move(move * Time.deltaTime * Speed);
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
    	void OnCollisionEnter(Collision collision)
    {
			print("oh no. this is touching");
		if (collision.gameObject.name == "Ocean 01 Blue")
        Debug.Log("entered!!");
            Destroy(collision.gameObject);
            // transform.Translate(-10, -10, -10);
    //     // ContactPoint contact = collision.contacts[0];
    //     // Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
    //     // Vector3 pos = contact.point;
	// 	// transform.Translate(Vector3.down * 5f * Time.deltaTime);
    }
    //    private void OnTriggerEnter(Collider other)
    // {
    //     if (enter)
    //     {
    //         print("print");
    //         Debug.Log("entered");
    //     }
    // }
}
