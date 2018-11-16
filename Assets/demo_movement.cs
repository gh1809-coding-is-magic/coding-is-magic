using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;


public class demo_movement : MonoBehaviour
{
  UnityEvent m_BallRoll = new UnityEvent();

  public float speed;

    // Use this for initialization
    void Start()
    {
        m_BallRoll.AddListener(BallAction);
        WebGLInput.captureAllKeyboardInput = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
          m_BallRoll.Invoke();
        }
    }
    void BallAction()
    {
        transform.Translate(Vector3.forward * Time.deltaTime);
        transform.Translate(Vector3.up * Time.deltaTime);
    }
}
